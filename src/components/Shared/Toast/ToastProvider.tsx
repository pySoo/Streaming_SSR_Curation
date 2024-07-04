import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

export default function ToastProvider() {
  return <ToastContainer limit={3} />;
}
