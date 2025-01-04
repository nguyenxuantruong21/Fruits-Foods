/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
type PaginationProps = {
  pageSize: number;
  page: number;
  onChange?: (page: number) => void;
  isPushParams?: boolean;
  prevBtn?: boolean;
  nextBtn?: boolean;
};
const activeClass = `bg-primaryColor text-white`;
const size = 4;
let isNavigatePage = false;
export default function Pagination({
  pageSize,
  page,
  isPushParams = true,
  prevBtn = true,
  nextBtn = true,
  onChange,
}: PaginationProps) {
  const range = Array.from({ length: pageSize }).map((_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearchParams = [...searchParams.entries()];

  const handleGoPage = (item: number) => {
    setCurrentPage(item);
    if (typeof onChange === "function") {
      onChange(item);
    }
  };

  const handleGoPrev = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleGoNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage === pageSize) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams.get("page")]);

  useEffect(() => {
    if (isPushParams && isNavigatePage) {
      let isPage = false;
      currentSearchParams.forEach((items, index) => {
        if (items[0] === "page") {
          currentSearchParams[index][1] = currentPage.toString();
          isPage = true;
        }
      });
      if (!isPage) {
        currentSearchParams.push(["page", currentPage.toString()]);
      }
      const queryString = currentSearchParams
        .map((items) => {
          return items.join("=");
        })
        .join("&");

      router.push(`${pathname}?${queryString}`);
    }
    return () => {
      isNavigatePage = true;
    };
  }, [currentPage, isPushParams, router, pathname]);

  return (
    <PaginationUI className="mt-10">
      <PaginationContent>
        {prevBtn && currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="p-8 lg:text-[1.6rem] border hover:bg-primaryColor hover:text-white rounded-xl border-secondaryColor"
              onClick={handleGoPrev}
            />
          </PaginationItem>
        )}
        {pageSize < size * 2 ? (
          range.map((item) => (
            <PaginationItem key={item}>
              <PaginationLink
                href="#"
                className={cn(
                  "p-8 lg:text-[1.6rem] border rounded-xl border-secondaryColor",
                  `hover:bg-primaryColor hover:text-white`,
                  +currentPage === +item && activeClass
                )}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleGoPage(item);
                }}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))
        ) : (
          <>
            {currentPage < size && (
              <>
                {Array.from({ length: size })
                  .map((_, index) => index + 1)
                  .map((item) => (
                    <PaginationItem key={item}>
                      <PaginationLink
                        href="#"
                        className={cn(
                          "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                          `hover:bg-primaryColor hover:text-white`,
                          +currentPage === item && activeClass
                        )}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          handleGoPage(item);
                        }}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                <PaginationEllipsis />
                <PaginationItem key={pageSize}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === pageSize && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(pageSize);
                    }}
                  >
                    {pageSize}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            {currentPage >= size && currentPage <= pageSize - size && (
              <>
                <PaginationItem key={1}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === 1 && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(1);
                    }}
                  >
                    {1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationEllipsis />
                <PaginationItem key={currentPage - 1}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === +currentPage - 1 && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(currentPage - 1);
                    }}
                  >
                    {currentPage - 1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem key={currentPage}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === +currentPage && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(currentPage);
                    }}
                  >
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem key={currentPage + 1}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === +currentPage + 1 && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(currentPage + 1);
                    }}
                  >
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationEllipsis />
                <PaginationItem key={pageSize}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === pageSize && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(pageSize);
                    }}
                  >
                    {pageSize}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            {currentPage > pageSize - size && (
              <>
                <PaginationItem key={1}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === 1 && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(1);
                    }}
                  >
                    {1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationEllipsis />
                <PaginationItem key={pageSize - size}>
                  <PaginationLink
                    href="#"
                    className={cn(
                      "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                      `hover:bg-primaryColor hover:text-white`,
                      +currentPage === pageSize - size && activeClass
                    )}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleGoPage(pageSize - size);
                    }}
                  >
                    {pageSize - size}
                  </PaginationLink>
                </PaginationItem>
                {Array.from({ length: size })
                  .map((_, index) => {
                    return (
                      <PaginationItem key={pageSize - index}>
                        <PaginationLink
                          href="#"
                          className={cn(
                            "p-8 rounded-xl lg:text-[1.6rem] border border-secondaryColor",
                            `hover:bg-primaryColor hover:text-white`,
                            +currentPage === pageSize - index && activeClass
                          )}
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            handleGoPage(pageSize - index);
                          }}
                        >
                          {pageSize - index}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })
                  .reverse()}
              </>
            )}
          </>
        )}
        {nextBtn && currentPage < pageSize && (
          <PaginationItem>
            <PaginationNext
              href="#"
              className="p-8 rounded-xl lg:text-[1.6rem] border hover:bg-primaryColor hover:text-white border-secondaryColor"
              onClick={handleGoNext}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationUI>
  );
}

/*
Trường hợp 1: page <= 4 --> Hiển thị 1 2 3 4 ... 7
Trường hợp 2: page > 4 && page <= pageSize - 4 --> Hiển thị 1 ... page - 1 page page + 1 ... 7
Trường hợp 3: page > pageSize - 4 --> Hiển thị 1 ... 4 5 6 7
*/
