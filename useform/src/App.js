import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="App">
      <input {...register("firstName", { minLength: 3, maxLength: 10 })} />
      {errors.firstName?.type === "maxLength" && <p>This value is too long!</p>}
      {errors.firstName?.type === "minLength" && (
        <p>This value is too short!</p>
      )}

      <input {...register("lastName", { minLength: 3, maxLength: 10 })} />
      {errors.lastName?.type === "maxLength" && <p>This value is too long!</p>}
      {errors.lastName?.type === "minLength" && <p>This value is too short!</p>}

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default App;
