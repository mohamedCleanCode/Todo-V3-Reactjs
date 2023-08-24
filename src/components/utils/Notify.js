import { toast } from "react-toastify";

const Notify = (type, msg) => {
  if (type === "success") {
    toast.success(msg);
  } else if (type === "warn") {
    toast.warn(msg);
  } else {
    toast.error(msg);
  }
};

export default Notify;
