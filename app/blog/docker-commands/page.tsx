"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Container, Box, Database, Network, Layers } from "lucide-react";
import { useState } from "react";

// Docker blue color theme
const dockerBlue = "#2496ED";

interface CodeBlockProps {
    code: string;
    language?: string;
}

function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            <div className="absolute top-2 right-2 z-10">
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    title="Copy code"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
                </button>
            </div>
            <pre className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto border border-[#2496ED]/30">
                <code className="text-sm text-gray-300 font-mono">{code}</code>
            </pre>
        </div>
    );
}

interface CommandCardProps {
    title: string;
    command: string;
    description: string;
}

function CommandCard({ title, command, description }: CommandCardProps) {
    return (
        <div className="bg-zinc-900/50 border border-[#2496ED]/20 rounded-lg p-4 hover:border-[#2496ED]/50 transition-colors">
            <h4 className="text-[#2496ED] font-semibold mb-2">{title}</h4>
            <CodeBlock code={command} />
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
}

export default function DockerCommandsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2496ED] mb-8 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-[#2496ED]/20 border border-[#2496ED]/30">
                            <Container size={32} className="text-[#2496ED]" />
                        </div>
                        <div>
                            <span className="text-[#2496ED] text-sm font-mono">DevOps / Containers</span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white">
                                Docker Commands Cheat Sheet
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg">
                        Essential Docker commands every developer should know. From basic container management to advanced networking.
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <span>By Ramjee Prasad</span>
                        <span>•</span>
                        <span>December 5, 2025</span>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-zinc-900/50 border border-[#2496ED]/20 rounded-xl p-6 mb-12"
                >
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Layers size={20} className="text-[#2496ED]" />
                        Table of Contents
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#basic-commands" className="hover:text-[#2496ED] transition-colors">1. Basic Docker Commands</a></li>
                        <li><a href="#container-commands" className="hover:text-[#2496ED] transition-colors">2. Container Management</a></li>
                        <li><a href="#image-commands" className="hover:text-[#2496ED] transition-colors">3. Image Commands</a></li>
                        <li><a href="#volume-commands" className="hover:text-[#2496ED] transition-colors">4. Volume Commands</a></li>
                        <li><a href="#network-commands" className="hover:text-[#2496ED] transition-colors">5. Network Commands</a></li>
                        <li><a href="#docker-compose" className="hover:text-[#2496ED] transition-colors">6. Docker Compose</a></li>
                        <li><a href="#cleanup-commands" className="hover:text-[#2496ED] transition-colors">7. Cleanup Commands</a></li>
                    </ul>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Basic Commands */}
                    <section id="basic-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Box size={24} className="text-[#2496ED]" />
                            1. Basic Docker Commands
                        </h2>
                        <div className="space-y-4">
                            <CommandCard
                                title="Check Docker Version"
                                command="docker --version"
                                description="Displays the installed Docker version."
                            />
                            <CommandCard
                                title="Docker System Info"
                                command="docker info"
                                description="Shows detailed information about the Docker installation."
                            />
                            <CommandCard
                                title="Docker Help"
                                command="docker --help"
                                description="Lists all available Docker commands."
                            />
                        </div>
                    </section>

                    {/* Container Commands */}
                    <section id="container-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Container size={24} className="text-[#2496ED]" />
                            2. Container Management
                        </h2>
                        <div className="space-y-4">
                            <CommandCard
                                title="Run a Container"
                                command="docker run -d --name my-container -p 8080:80 nginx"
                                description="Runs a container in detached mode with port mapping. -d = detached, -p = port mapping."
                            />
                            <CommandCard
                                title="List Running Containers"
                                command="docker ps"
                                description="Shows all currently running containers."
                            />
                            <CommandCard
                                title="List All Containers"
                                command="docker ps -a"
                                description="Shows all containers including stopped ones."
                            />
                            <CommandCard
                                title="Stop a Container"
                                command="docker stop <container_id>"
                                description="Gracefully stops a running container."
                            />
                            <CommandCard
                                title="Start a Container"
                                command="docker start <container_id>"
                                description="Starts a stopped container."
                            />
                            <CommandCard
                                title="Remove a Container"
                                command="docker rm <container_id>"
                                description="Removes a stopped container. Use -f to force remove a running container."
                            />
                            <CommandCard
                                title="Container Logs"
                                command="docker logs -f <container_id>"
                                description="View container logs. -f follows the log output in real-time."
                            />
                            <CommandCard
                                title="Execute Command in Container"
                                command="docker exec -it <container_id> /bin/bash"
                                description="Opens an interactive shell inside the running container."
                            />
                        </div>
                    </section>

                    {/* Image Commands */}
                    <section id="image-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers size={24} className="text-[#2496ED]" />
                            3. Image Commands
                        </h2>
                        <div className="space-y-4">
                            <CommandCard
                                title="List Images"
                                command="docker images"
                                description="Lists all Docker images on your system."
                            />
                            <CommandCard
                                title="Pull an Image"
                                command="docker pull nginx:latest"
                                description="Downloads an image from Docker Hub."
                            />
                            <CommandCard
                                title="Build an Image"
                                command="docker build -t my-app:1.0 ."
                                description="Builds an image from a Dockerfile in the current directory."
                            />
                            <CommandCard
                                title="Tag an Image"
                                command="docker tag my-app:1.0 username/my-app:1.0"
                                description="Creates a tag for an image (useful for pushing to registries)."
                            />
                            <CommandCard
                                title="Push an Image"
                                command="docker push username/my-app:1.0"
                                description="Pushes an image to Docker Hub or another registry."
                            />
                            <CommandCard
                                title="Remove an Image"
                                command="docker rmi <image_id>"
                                description="Removes an image from your system."
                            />
                        </div>
                    </section>

                    {/* Volume Commands */}
                    <section id="volume-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Database size={24} className="text-[#2496ED]" />
                            4. Volume Commands
                        </h2>
                        <div className="space-y-4">
                            <CommandCard
                                title="Create a Volume"
                                command="docker volume create my-volume"
                                description="Creates a new named volume for persistent data storage."
                            />
                            <CommandCard
                                title="List Volumes"
                                command="docker volume ls"
                                description="Lists all Docker volumes."
                            />
                            <CommandCard
                                title="Run with Volume"
                                command="docker run -d -v my-volume:/data nginx"
                                description="Runs a container with a volume mounted at /data."
                            />
                            <CommandCard
                                title="Bind Mount"
                                command="docker run -d -v $(pwd):/app nginx"
                                description="Mounts current directory to /app in the container."
                            />
                            <CommandCard
                                title="Remove Volume"
                                command="docker volume rm my-volume"
                                description="Removes a volume. Volume must not be in use."
                            />
                        </div>
                    </section>

                    {/* Network Commands */}
                    <section id="network-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Network size={24} className="text-[#2496ED]" />
                            5. Network Commands
                        </h2>
                        <div className="space-y-4">
                            <CommandCard
                                title="List Networks"
                                command="docker network ls"
                                description="Lists all Docker networks."
                            />
                            <CommandCard
                                title="Create a Network"
                                command="docker network create my-network"
                                description="Creates a new bridge network."
                            />
                            <CommandCard
                                title="Run Container in Network"
                                command="docker run -d --network my-network --name app nginx"
                                description="Runs a container connected to a specific network."
                            />
                            <CommandCard
                                title="Connect Container to Network"
                                command="docker network connect my-network container_name"
                                description="Connects an existing container to a network."
                            />
                            <CommandCard
                                title="Inspect Network"
                                command="docker network inspect my-network"
                                description="Shows detailed information about a network."
                            />
                        </div>
                    </section>

                    {/* Docker Compose */}
                    <section id="docker-compose">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers size={24} className="text-[#2496ED]" />
                            6. Docker Compose
                        </h2>
                        <div className="bg-zinc-900/50 border border-[#2496ED]/20 rounded-lg p-6 mb-6">
                            <h4 className="text-[#2496ED] font-semibold mb-3">Example docker-compose.yml</h4>
                            <CodeBlock code={`version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`} />
                        </div>
                        <div className="space-y-4">
                            <CommandCard
                                title="Start Services"
                                command="docker compose up -d"
                                description="Starts all services defined in docker-compose.yml in detached mode."
                            />
                            <CommandCard
                                title="Stop Services"
                                command="docker compose down"
                                description="Stops and removes all containers, networks created by compose."
                            />
                            <CommandCard
                                title="View Logs"
                                command="docker compose logs -f"
                                description="Shows combined logs from all services."
                            />
                            <CommandCard
                                title="Rebuild Services"
                                command="docker compose up -d --build"
                                description="Rebuilds images and restarts services."
                            />
                            <CommandCard
                                title="Scale Service"
                                command="docker compose up -d --scale web=3"
                                description="Runs 3 instances of the web service."
                            />
                        </div>
                    </section>

                    {/* Cleanup Commands */}
                    <section id="cleanup-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Box size={24} className="text-[#2496ED]" />
                            7. Cleanup Commands
                        </h2>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                            <p className="text-red-400 text-sm">
                                ⚠️ <strong>Warning:</strong> These commands permanently delete resources. Use with caution!
                            </p>
                        </div>
                        <div className="space-y-4">
                            <CommandCard
                                title="Remove All Stopped Containers"
                                command="docker container prune"
                                description="Removes all stopped containers."
                            />
                            <CommandCard
                                title="Remove Unused Images"
                                command="docker image prune -a"
                                description="Removes all images not used by containers."
                            />
                            <CommandCard
                                title="Remove Unused Volumes"
                                command="docker volume prune"
                                description="Removes all unused volumes."
                            />
                            <CommandCard
                                title="Remove Everything Unused"
                                command="docker system prune -a --volumes"
                                description="Nuclear option: removes all unused containers, images, networks, and volumes."
                            />
                            <CommandCard
                                title="Check Disk Usage"
                                command="docker system df"
                                description="Shows Docker disk usage breakdown."
                            />
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Written by <span className="text-[#2496ED]">Ramjee Prasad</span> • Backend Developer
                        </p>
                        <Link
                            href="/"
                            className="text-[#2496ED] hover:underline text-sm"
                        >
                            ← Back to Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
