import Toast from 'react-native-simple-toast';
export const ToastView = (message: any) => {
  return Toast.showWithGravity(message, Toast.BOTTOM, Toast.SHORT);
};
