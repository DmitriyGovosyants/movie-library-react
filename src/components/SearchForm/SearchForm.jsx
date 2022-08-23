import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FormBox, Form, Input, SubmitBtn } from './SearchForm.styled';

export const SearchForm = ({ setSearch }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ query }) => {
    const queryNormalized = query.trim();

    if (!queryNormalized) {
      return toast('Please, enter the text');
    }

    setSearch(queryNormalized);
    reset();
  };

  return (
    <FormBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('query')}
          type="text"
          placeholder="Movie Search"
          autoComplete="off"
        />
        <SubmitBtn type="submit">
          <BsSearch size={30} color={'inherit'} />
        </SubmitBtn>
      </Form>
    </FormBox>
  );
};
