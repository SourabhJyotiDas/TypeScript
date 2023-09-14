// pertial type

type User = {
  name: string;
  email: string;
};

type CopyUserButNotManditoryValue = Partial<User>;
