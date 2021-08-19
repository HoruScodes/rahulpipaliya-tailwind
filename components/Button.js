import Link from "next/link";
import cx from "clsx";

export const Button = ({ children, href, color, ...props }) => {
  return (
    <div>
      <Link href={href}>
        <a
          className={cx(
            " block px-8 py-2 text-center transition duration-200  shadow-md rounded focus:outline-none hover:shadow-lg hover:translate-y-px",
            {
              "text-white bg-sViolate  border-transparent  hover:bg-sHover":
                color === "primary",
              "text-sViolate bg-white border-gray-300 hover:text-sHover":
                color === "secondary",
            }
          )}
          {...props}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};
