import { Button } from "./Button";

export const GetInTouch = () => {
  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
        Get in Touch
      </h1>
      <div className="flex flex-col  flex-start">
        <p className="my-4">
          my inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you! Thank you!.
        </p>
        <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex">
          <Button
            color="primary"
            href="mailto:pipaliya1997@gmail.com"
            target="_blank"
          >
            Mail Me!
          </Button>
        </div>
      </div>
    </div>
  );
};
