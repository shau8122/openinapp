import React from "react";
interface UploadIconPorps {
 
  isActive: Boolean;
}
const UploadIcon = ({ isActive }: UploadIconPorps) => {
  const fillColor = isActive ? "#605BFF" : "#9A9AA9";

  return (
    <svg
      width="20"
      height="23"
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${fillColor}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33 0H14.669C18.07 0 19.99 2.1243 20 5.86962V16.1552C20 19.8994 18.07 22.0248 14.669 22.0248H5.33C1.929 22.0248 0 19.8994 0 16.1552V5.86962C0 2.1243 1.929 0 5.33 0ZM10.049 17.4657C10.48 17.4657 10.839 17.1133 10.879 16.6398V5.41811C10.919 5.07672 10.77 4.73424 10.5 4.54813C10.219 4.36092 9.879 4.36092 9.61 4.54813C9.339 4.73424 9.19 5.07672 9.219 5.41811V16.6398C9.27 17.1133 9.629 17.4657 10.049 17.4657ZM14.65 17.4657C15.07 17.4657 15.429 17.1133 15.48 16.6398V13.0277C15.509 12.6742 15.36 12.3449 15.089 12.1577C14.82 11.9705 14.48 11.9705 14.2 12.1577C13.929 12.3449 13.78 12.6742 13.82 13.0277V16.6398C13.86 17.1133 14.219 17.4657 14.65 17.4657ZM6.21899 16.6398C6.17899 17.1133 5.81999 17.4657 5.38899 17.4657C4.95899 17.4657 4.59899 17.1133 4.55999 16.6398V9.03018C4.52999 8.6877 4.67899 8.34741 4.94999 8.1602C5.21899 7.97299 5.55999 7.97299 5.82999 8.1602C6.09899 8.34741 6.24999 8.6877 6.21899 9.03018V16.6398Z"
        fill={`${fillColor}`}
      />
    </svg>
  );
};

export default UploadIcon;
