import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full p-20 flex">
        <div className="flex flex-col justify-between mt-20 mr-70">
            <div>
                <p>dennis gega</p>
                <p>storrs, connecticut</p>
            </div>

            <div>
                <p>about</p>
                <p>fullstack developer</p>
                <p>computer science/mathematics</p>
                <p>at university of connecticut</p>
            </div>

            <div>
                <p>contact</p>
                <p>dennis.gega@uconn.edu</p>
                <p>linkedin.com/in/dennisgega</p>
            </div>

            <div>
                <p>experience</p>
                <p>dennis_gega_resume.pdf</p>
                <p>github.com/dennis-gega</p>
            </div>
        </div>

        <div className="mt-20">
            <Image
                src="/sail.png"
                height={800}
                width={1300}
                alt="sail"
            />
        </div>
    </div>
  );
}
