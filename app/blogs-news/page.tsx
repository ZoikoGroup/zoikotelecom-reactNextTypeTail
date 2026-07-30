import BlogsPage from "./Blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom Blog | Your Source for Telecom News and Tips",
  description:
    "Explore Zoiko Telecom blogs for insightful articles on technology, updates, and tips that enhance your telecom industry experience. Stay informed and engaged!",
};
export default function(){
    return (
        <>
            <BlogsPage/>
        </>
    )
}