import Link from "next/link";
import { useRouter } from "next/router";

import { useMemo } from "react";
import classnames from "classnames";

const Paging = ({ count = 0, limit = 1 }) => {
  const router = useRouter();

  const getPageElms = useMemo(() => {
    const _pagesCount = Math.ceil(count / limit);
    const _pageElms = [];

    for (let i = 1; i <= _pagesCount; i++) {
      _pageElms.push(
        <li
          key={`page${i}`}
          className={classnames({
            ["page-item"]: true,
            ["active"]:
              router.query && router.query.page
                ? router.query.page === i.toString()
                  ? true
                  : false
                : i === 1,
          })}
        >
          <Link href={`${router.pathname}?page=${i}`}>
            <a className="page-link">{i}</a>
          </Link>
        </li>
      );
    }

    return _pageElms;
  }, [count, limit, router.query.page]);

  return (
    <nav className="blog-pagination justify-content-center d-flex">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Previous">
            <i className="ti-angle-left"></i>
          </a>
        </li>
        {getPageElms}
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Next">
            <i className="ti-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paging;
