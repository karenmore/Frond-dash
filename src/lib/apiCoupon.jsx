import axios from 'axios';

const apiCoupon = axios.create({
  baseURL: 'https://dcms-iduiq3dhhq-uc.a.run.app',
});

export default apiCoupon;
