import axios from "axios";
import { useEffect, useState } from "react";
import { GitHubItem, HttpProps } from '../interface/interface';




export const httpGit = (url = "https://api.github.com/users/pandadesigner"): HttpProps => {
  const getGitHub = axios.get(url);
  const [data, setData] = useState<GitHubItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {

    setIsLoading(true)
    getGitHub.then((gitItem) => {
      setData(gitItem.data)
    })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
      })
      .finally(() => setIsLoading(false))

  }, []);

  return {
    data,
    isLoading,
    error,
    errorMessage
  };
};
