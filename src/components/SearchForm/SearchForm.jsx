import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FormWrapper, Form, Input, Submit } from './SearchForm.styled';

export const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ query }) => {
    if (!query.trim()) {
      return toast('Please, enter the text');
    }
    console.log(query.trim());
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
          <BsSearch size={14} color={'white'} />
        </Submit>
      </Form>
    </FormWrapper>
  );
};
