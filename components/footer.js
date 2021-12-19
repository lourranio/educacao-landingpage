import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/">
                <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <img
                      src="/img/logo.png"
                      alt="Logo Rocketseat"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  </span>
                  <span>Educação</span>
                </a>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              A evolução da Educação não para.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
