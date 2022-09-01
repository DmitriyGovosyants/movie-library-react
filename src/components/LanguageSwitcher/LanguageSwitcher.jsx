import Select from 'react-select';
import { useUser } from 'context/userContext';
import { useTMDBData } from 'context/tmdbDataContext';
import { LangMenuBox, selectStyles } from './LanguageSwitcher.styled';

export const LanguageSwitcher = () => {
  const { languagesList } = useTMDBData();
  const { userLanguage, setUserLanguage } = useUser();

  const languageOption = languagesList.reduce((languages, language) => {
    return [
      ...languages,
      { value: language?.iso_639_1, label: language?.english_name },
    ];
  }, []);

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
