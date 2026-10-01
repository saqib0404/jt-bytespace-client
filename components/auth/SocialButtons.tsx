import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      <button
        type="button"
        aria-label="Sign in with Facebook"
        className="
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-neutral-200
          transition
          hover:bg-neutral-50
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary-600
        "
      >
        <FaFacebook size={26} fill="currentColor" />
      </button>

      <button
        type="button"
        aria-label="Sign in with Google"
        className="
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-neutral-200
          transition
          hover:bg-neutral-50
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary-600
        "
      >
        <FaGoogle size={26} fill="currentColor" />
      </button>
    </div>
  );
}
