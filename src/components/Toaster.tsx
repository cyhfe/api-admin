import { toast, Toaster as ToasterBase, ToastBar } from "react-hot-toast";
import { MdClose } from "react-icons/md";

function Toaster() {
  return (
    <ToasterBase position="top-right">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <div
                  className="p-2 cursor-pointer hover:bg-slate-100 flex items-center"
                  onClick={() => toast.dismiss(t.id)}
                >
                  <MdClose />
                </div>
              )}
            </>
          )}
        </ToastBar>
      )}
    </ToasterBase>
  );
}

export default Toaster;
