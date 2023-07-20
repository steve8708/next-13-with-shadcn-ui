import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init('YOUR_API_KEY');

interface PageProps { 
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) { 
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", { 
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""), 
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false, 
    })
    // Convert the result to a promise
    .toPromise(); 

console.log('hi?')

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}