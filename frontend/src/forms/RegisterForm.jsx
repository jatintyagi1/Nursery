import { FaUser, FaEnvelope, FaLock, FaMobile } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function RegisterForm() {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
            .required('Mobile number is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        const BACKEND_URL = import.meta.env.VITE_API_URL;
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/register`, data, {
                headers: { 'Content-Type': 'application/json' }
            });

            const result = response.data;
            toast.success(result.message);

            setTimeout(() => navigate('/'), 4000);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error || 'Registration failed');
            } else {
                toast.error('Server error. Please try again.');
            }
            console.error('Error:', error);
        }
    };



    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FaUser />
                            </span>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Name"
                            {...register('name')}
                        />
                    </div>
                    {/* <div className="invalid-feedback">{errors.name?.message}</div> */}
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FaEnvelope />
                            </span>
                        </div>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder="Email"
                            {...register('email')}
                        />
                    </div>
                    {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FaMobile />
                            </span>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                            placeholder="Mobile Number"
                            {...register('mobileNumber')}
                        />
                    </div>
                    {/* <div className="invalid-feedback">{errors.mobileNumber?.message}</div> */}
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FaLock />
                            </span>
                        </div>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Password"
                            {...register('password')}
                        />
                    </div>
                    {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FaLock />
                            </span>
                        </div>
                        <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            placeholder="Confirm Password"
                            {...register('confirmPassword')}
                        />
                    </div>
                    {/* <div className="invalid-feedback">{errors.confirmPassword?.message}</div> */}
                </div>

                <button type="submit" className="btn btn-signup">Sign Up</button>

                <div className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </>
    );
}
