import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AboutTabs = () => {
  return (
    <>
      <Tabs defaultValue="Front-End Development" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Front-End Development">Front-End</TabsTrigger>
          <TabsTrigger value="Back-End Expertise">Back-End</TabsTrigger>
          <TabsTrigger value="Full-Stack Capabilities">Full-Stack</TabsTrigger>
          <TabsTrigger value="Data Management">Database</TabsTrigger>
        </TabsList>
        <TabsContent value="Front-End Development">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <h3 className="text-xl font-bold">Javascript</h3>
            <h3 className="text-xl font-bold">React Js</h3>
            <h3 className="text-xl font-bold">Next Js</h3>
            <h3 className="text-xl font-bold">Redux</h3>
            <h3 className="text-xl font-bold">TailwindCss</h3>
          </div>
          <div className="py-4">
            <Separator />
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Frontend development</AccordionTrigger>
              <AccordionContent>
                I'm proficient in React, Redux, and Next.js, enabling me to
                build dynamic and responsive user interfaces. I use TypeScript
                to ensure type safety and robust code.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Back-End Expertise">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <h3 className="text-xl font-bold">NodeJs</h3>
            <h3 className="text-xl font-bold">ExpressJs</h3>
            <h3 className="text-xl font-bold">TypeScript</h3>
            <h3 className="text-xl font-bold">Prisma</h3>
            <h3 className="text-xl font-bold">Mongoose</h3>
          </div>
          <div className="py-4">
            <Separator />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Backend development</AccordionTrigger>
              <AccordionContent>
                I'm well-versed in server-side development using typeScript,
                Node.js and Express.js. I have experience in working with
                databases, including PostgreSQL and MongoDB
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Full-Stack Capabilities">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <h3 className="text-xl font-bold">Javascript</h3>
            <h3 className="text-xl font-bold">ReactJs</h3>
            <h3 className="text-xl font-bold">NextJs</h3>
            <h3 className="text-xl font-bold">Redux</h3>
            <h3 className="text-xl font-bold">TailwindCss</h3>
            <h3 className="text-xl font-bold">NodeJs</h3>
            <h3 className="text-xl font-bold">ExpressJs</h3>
            <h3 className="text-xl font-bold">TypeScript</h3>
            <h3 className="text-xl font-bold">Prisma</h3>
            <h3 className="text-xl font-bold">Mongoose</h3>
          </div>
          <div className="py-4">
            <Separator />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Full Stack development</AccordionTrigger>
              <AccordionContent>
                I bring both my front-end and back-end knowledge together to
                create end-to-end solutions, providing a seamless and enjoyable
                user experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Data Management">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <h3 className="text-xl font-bold">MongoDB</h3>
            <h3 className="text-xl font-bold">SQL</h3>
            <h3 className="text-xl font-bold">PostgreSQL</h3>
          </div>
          <div className="py-4">
            <Separator />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Database Management</AccordionTrigger>
              <AccordionContent>
                I have a solid foundation in data modeling and database
                management, allowing me to design and maintain robust data
                structures.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AboutTabs;
