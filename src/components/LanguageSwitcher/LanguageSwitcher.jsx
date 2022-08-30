import { useIMDBData } from 'hooks/imdbDataContext';
import { useUser } from 'hooks/userContext';
import Select from 'react-select';
import { LangMenuBox, selectStyles } from './LanguageSwitcher.styled';

export const LanguageSwitcher = () => {
  const { languagesList } = useIMDBData();
  const { userLanguage, setUserLanguage } = useUser();

  const languageOption = languagesList.reduce((languages, language) => {
    return [
      ...languages,
      { value: language?.iso_639_1, label: language?.english_name },
    ];
  }, []);
  console.log('SWITCH', userLanguage);

  return (
    <LangMenuBox>
      <Select
        defaultValue={userLanguage}
        onChange={setUserLanguage}
        options={languageOption}
        styles={selectStyles}
      />
    </LangMenuBox>
  );
};
