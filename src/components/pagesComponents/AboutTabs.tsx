import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutTabs = () => {
  return (
    <>
      <Tabs defaultValue="Front-End Development" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Front-End Development">
            Front-End
          </TabsTrigger>
          <TabsTrigger value="Back-End Expertise">
            Back-End
          </TabsTrigger>
          <TabsTrigger value="Full-Stack Capabilities">
            Full-Stack
          </TabsTrigger>
          <TabsTrigger value="Data Management">Database</TabsTrigger>
        </TabsList>
        <TabsContent value="Front-End Development">
          I'm proficient in React, Redux, and Next.js, enabling me to build
          dynamic and responsive user interfaces. I use TypeScript to ensure
          type safety and robust code.
        </TabsContent>
        <TabsContent value="Back-End Expertise">
          {" "}
          I'm well-versed in server-side development using typeScript, Node.js
          and Express.js. I have experience in working with databases, including
          PostgreSQL and MongoDB
        </TabsContent>
        <TabsContent value="Full-Stack Capabilities">
          I bring both my front-end and back-end knowledge together to create
          end-to-end solutions, providing a seamless and enjoyable user
          experience.
        </TabsContent>
        <TabsContent value="Data Management">
          I have a solid foundation in data modeling and database management,
          allowing me to design and maintain robust data structures.
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AboutTabs;
