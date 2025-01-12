import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function LoginForm() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
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
            const response = await axios.post(`${BACKEND_URL}/api/auth/login`, data, {
                headers: { 'Content-Type': 'application/json' },
            });

            const result = response.data;
            toast.success(result.message);

            setTimeout(() => navigate('/'), 4000);

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error || 'Login failed');
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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: '10px'
                    }}
                >
                    <a href='/forgot-password' className='forgot-pass'>
                        Forgot Password ?
                    </a>
                </div>
                <button type="submit" className="btn btn-signup">Login</button>
                <div className="login-text">
                    Don&apos;t have an account? <a href="/register">Sign Up</a>
                </div>

            </form>
        </>
    )
}
