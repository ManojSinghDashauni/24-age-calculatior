import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const d = new Date();

export default function App() {
  const [day, setDaytime] = useState();
  const [month, setMonthtime] = useState();
  const [year, setYeartime] = useState();
  const [show, setShow] = useState(false);

  console.log(typeof d.getMonth());

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  // const onSubmit = (data) => (
  //   console.log(data),
  //   setDaytime(data.day),
  //   setMonthtime(data.month),
  //   setYeartime(data.year),
  // )

  const resultShow = () => setShow(true);

  console.log(watch("example"));

  return (
    <div className="sm:w-screen sm:h-screen h-svh w-screen bg-slate-100 flex  flex-col justify-center items-center">
      <div className="sm:p-10 p-5 rounded-3xl rounded-br-[25%] bg-white">
        <form className="flex py-10 sm:pr-32  justify-center">
          <span className="input-area mr-5">
            <label
              htmlFor="day"
              className={`label-color ${isValid} ? "text-gray-600": "text-red-600"`}
            >
              DAY
            </label>
            <input
              min={1}
              max={31}
              maxLength={2}
              minLength={1}
              className="input"
              placeholder="DD"
              {...register("day", {
                required: true,
                minLength: 1,
                maxLength: 2,
                min: 1,
                max: 31,
                value: day,
                onChange: (e) => setDaytime(e.target.value),
              })}
            />
            {errors.day && (
              <span className="error-color">Must Be a Valid day</span>
            )}
          </span>

          <span className="input-area mr-5">
            <label htmlFor="month" className="label-color">
              MONTH
            </label>
            <input
              className="input"
              placeholder="MM"
              min={1}
              max={12}
              maxLength={2}
              minLength={1}
              {...register("month", {
                required: true,
                maxLength: 2,
                min: 1,
                max: 12,
                value: month,
                onChange: (e) => setMonthtime(e.target.value),
              })}
            />
            {errors.month && (
              <span className="error-color">Must Be a Valid month</span>
            )}
          </span>

          <span className="input-area">
            <label htmlFor="year" className="label-color">
              YEAR
            </label>
            <input
              className="input"
              placeholder="YY"
              min={1900}
              max={d.getFullYear()}
              maxLength={4}
              minLength={4}
              {...register("year", {
                required: true,
                minLength: 4,
                maxLength: 4,
                min: 1,
                max: d.getFullYear(),
                value: year,
                onChange: (e) => setYeartime(e.target.value),
              })}
            />
            {errors.year && (
              <span className="error-color">Must Be a Valid year</span>
            )}
          </span>

          {/* <input type="submit" /> */}
        </form>
        <div className="result relative">
          {show && isValid ? (
            <p>
              <span className="text-purple-600">{d.getFullYear() - year} </span>
              year
            </p>
          ) : (
            <p>
              <span className="text-purple-600">-- </span>year
            </p>
          )}
          {show && isValid ? (
            <p>
              <span className="text-purple-600">{d.getMonth() - month} </span>
              months
            </p>
          ) : (
            <p>
              <span className="text-purple-600">-- </span>months
            </p>
          )}
          {show && isValid ? (
            <p>
              <span className="text-purple-600">{d.getDate() - day} </span>days
            </p>
          ) : (
            <p>
              <span className="text-purple-600">-- </span>days
            </p>
          )}

          <div className="btn" onClick={resultShow}>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
