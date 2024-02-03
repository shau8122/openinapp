import React from "react";
interface InvoiceIconPorps {
  isActive: Boolean;
}
const InvoiceIcon = ({ isActive }: InvoiceIconPorps) => {
  const fillColor = isActive ? "#605BFF" : "#9A9AA9";

  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.7872 7.20107C19.6518 7.34592 19.4681 7.42869 19.2747 7.42869C18.559 7.42869 17.9787 8.04948 17.9787 8.80476C17.9787 9.56522 18.5522 10.1829 19.2611 10.1912C19.6605 10.1953 20 10.4933 20 10.9206V13.5744C20 15.8082 18.3075 17.6199 16.2186 17.6199H13.0658C12.7398 17.6199 12.4758 17.3374 12.4758 16.9887V14.7539C12.4758 14.3194 12.1567 13.9779 11.7505 13.9779C11.354 13.9779 11.0251 14.3194 11.0251 14.7539V16.9887C11.0251 17.3374 10.7611 17.6199 10.4362 17.6199H3.78143C1.70213 17.6199 0 15.8093 0 13.5744V10.9206C0 10.4933 0.339458 10.1953 0.738878 10.1912C1.44874 10.1829 2.02128 9.56522 2.02128 8.80476C2.02128 8.07017 1.46035 7.51146 0.725339 7.51146C0.531915 7.51146 0.348162 7.42869 0.212766 7.28384C0.0773694 7.13899 0 6.94241 0 6.73549V4.05578C0 1.8251 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.282456 11.0251 0.631129V3.2798C11.0251 3.704 11.354 4.05578 11.7505 4.05578C12.1567 4.05578 12.4758 3.704 12.4758 3.2798V0.631129C12.4758 0.282456 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.81061 20 4.04543V6.65272C20 6.85964 19.9226 7.05622 19.7872 7.20107ZM11.7505 11.9707C12.1567 11.9707 12.4758 11.619 12.4758 11.1948V7.05622C12.4758 6.63202 12.1567 6.28025 11.7505 6.28025C11.354 6.28025 11.0251 6.63202 11.0251 7.05622V11.1948C11.0251 11.619 11.354 11.9707 11.7505 11.9707Z"
        fill={`${fillColor}`}
      />
    </svg>
  );
};

export default InvoiceIcon;
