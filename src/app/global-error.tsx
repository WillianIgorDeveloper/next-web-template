"use client"

import { PATHS } from "@/shared/constants/routes"
import Link from "next/link"

export default function GlobalError() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">An Error Occurred</h1>
      <p className="mb-6 text-lg text-gray-600">
        Sorry, something went wrong while loading the page.
      </p>
      <Link href={PATHS.LANDING} className="text-blue-500 hover:underline">
        Go back to the Landing Page
      </Link>
    </div>
  )
}
