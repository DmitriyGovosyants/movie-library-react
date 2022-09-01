import { SortConstants } from 'constants/constants';
import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Input, SubmitBtn } from './SearchForm.styled';

export const SearchForm = ({ setSearch, setPage }) => {
  const { register, handleSubmit, reset } = useForm();
  const [, setSearchParams] = useSearchParams();

  const onSubmit = ({ query }) => {
    const queryNormalized = query.trim();

    if (!queryNormalized) {
      return toast('Please, enter the text');
    }

    setSearchParams({ sorting: SortConstants.SEARCH, search: queryNormalized });
    setSearch(queryNormalized);
    setPage(1);
    reset();
  };

  return (
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
  );
};
