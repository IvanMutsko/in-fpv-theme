import { ProgressBar } from "react-loader-spinner";

export default function Loader() {
  return (
    <ProgressBar
      visible={true}
      height="140"
      width="140"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
