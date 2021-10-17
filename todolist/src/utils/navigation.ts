import type {
  ParamListBase,
  PathConfig,
  PathConfigMap,
} from '@react-navigation/native';

type LinkingConfig<T extends ParamListBase> = {
  baseUrl?: string;
  paths: {
    [key in keyof T]?: PathConfig<T> | string;
  };
};

export function generateLinkingConfig<T extends ParamListBase>(
  params?: LinkingConfig<T>,
): PathConfigMap<T> {
  if (!params) {
    return {};
  }

  const { paths, baseUrl } = params;

  return Object.keys(paths).reduce((prevValue, currentKey) => {
    const value = paths[currentKey];

    if (!value) {
      return {
        ...prevValue,
      };
    }

    if (!baseUrl) {
      return {
        ...prevValue,
        [currentKey]: value,
      };
    }

    if (typeof value === 'string') {
      return {
        ...prevValue,
        [currentKey]: [baseUrl, value].join('/'),
      };
    }

    if (value.path) {
      value.path = [baseUrl, value.path].join('/');
    }

    if (value.screens) {
      return {
        ...prevValue,
        [currentKey]: {
          ...value,
          screens: generateLinkingConfig({ baseUrl, paths: value.screens }),
        },
      };
    }

    if (!value.path) {
      return {
        ...prevValue,
        [currentKey]: {
          ...value,
          path: baseUrl,
        },
      };
    }

    return {
      ...prevValue,
      [currentKey]: value,
    };
  }, {} as PathConfigMap<T>);
}
