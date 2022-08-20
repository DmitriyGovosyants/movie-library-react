import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FormWrapper, Form, Input, Submit } from './SearchForm.styled';

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
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('query')}
          type="text"
          placeholder="Movie Search"
          autoComplete="off"
          autoFocus
        />
        <Submit type="submit">
          <BsSearch size={30} color={'inherit'} />
        </Submit>
      </Form>
    </FormWrapper>
  );
};
