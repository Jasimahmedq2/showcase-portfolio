import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectModal = ({
  project,
  live,
  github,
}: {
  project: {
    name: string;
    image: string;
    live_link: string;
    frontend_code: string;
    backend_code: string;
    description: string;
    technologies: string;
  };
  live: string;
  github: string;
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#252734] text-white" variant="outline">
            Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:w-11/12">
          <a href={project?.live_link} target="_blank">
            <img
              className="rounded-t-lg max-h-52 w-11/12"
              src={project?.image}
              alt=""
            />
          </a>
          <DialogHeader>
            <DialogTitle className="text-white">{project?.name}</DialogTitle>
            <DialogDescription>
              <h5 className="pt-2 pb-2 text-white text-md">
                Technologies: {project?.technologies}
              </h5>
              <p className="text-white">{project?.description}</p>
              <div className="flex items-center justify-around space-x-3 pt-8">
                <a href={project?.live_link} target="_blank">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                      src={live}
                      alt=""
                    />

                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                </a>
                {project?.frontend_code && (
                  <a href={project?.frontend_code} target="_blank">
                    <div className="cursor-pointer">
                      <img
                        className="w-1/2 mx-auto"
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                        src={github}
                        alt=""
                      />
                      <p className="text-sm text-white pb-1">frontend</p>
                    </div>
                  </a>
                )}
                {project?.backend_code && (
                  <a href={project?.backend_code} target="_blank">
                    <div className="cursor-pointer">
                      <img
                        className="w-1/2 mx-auto"
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                        src={github}
                        alt=""
                      />
                      <p className="text-sm text-white pb-1">backend</p>
                    </div>
                  </a>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectModal;
