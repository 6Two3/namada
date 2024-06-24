interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <p className="capitalize text-xl font-semibold text-black dark:text-yellow lg:flex hidden">
      {pageName}
    </p>
  );
};

export default Breadcrumb;
