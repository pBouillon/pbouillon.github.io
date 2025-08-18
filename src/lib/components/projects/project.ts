export type ProjectType = 'teaching' | 'writing' | 'code';

export type ProjectReference = {
  source: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  type: ProjectType;
  reference?: ProjectReference;
};
