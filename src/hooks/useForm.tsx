import { useCallback, useEffect, useState } from "react";
import { FormType } from "../types/formType";

const useForm = () => {
  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onValid = useCallback(() => {
    if (form.email.includes("@") && form.password.length >= 8) setValid(true);
    else setValid(false);
  }, [form]);

  useEffect(() => {
    onValid();
  }, [form, onValid]);

  return { form, onChange, valid, setForm };
};

export default useForm;
