import CodeBox from "@/components/CodeBox";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
	const codeString = `
    // Example of a class in JavaScript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        sayHello() {
            return \`Hi, I'm \${this.name} and 
                I'm \${this.age} years old.\`;
        }
    }

    const person = new Person('John', 30);
    console.log(person.sayHello());
    // Output: Hi, I'm John and I'm 30 years old.
    `;
	return (
		<PageWrapper title="Dashboard">
			<div>
				<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
					Welcome
				</h2>
				<p className="text-gray-700 dark:text-gray-300">
					Welcome to your Next.js application with Tailwind CSS!
				</p>
				<CodeBox codeString={ codeString }/>
			</div>
		</PageWrapper>
	);
}
