"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaCode } from "react-icons/fa";
import Image from "next/image";
import TiltCard from "./TiltCard";
import { profile } from "../data/content";

export default function GithubWidget() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract username from github link
  const githubUrl = profile.links?.github || "";
  const usernameMatch = githubUrl.match(/github\.com\/([^/]+)/);
  const username = usernameMatch ? usernameMatch[1] : "sarthaksinghaniya";

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        // Fetch top repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=100`);
        const reposData = await reposRes.json();
        
        let totalStars = 0;
        if (Array.isArray(reposData)) {
          totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        }

        setStats({
          followers: userData.followers || 0,
          publicRepos: userData.public_repos || 0,
          totalStars: totalStars,
          avatarUrl: userData.avatar_url
        });
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchGithubStats();
  }, [username]);

  if (loading || !stats) {
    return (
      <div className="game-card p-6 border border-stone/30 bg-dark-900 flex items-center justify-center animate-pulse h-32">
        <span className="text-stone font-display text-sm tracking-widest uppercase">Connecting to GitHub Servers...</span>
      </div>
    );
  }

  return (
    <TiltCard intensity={5} className="w-full">
      <div className="game-card p-6 bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-stone/30 relative overflow-hidden group hover:border-primary/50 transition-colors">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden shadow-[0_0_10px_rgba(247,201,72,0.5)]">
            {stats.avatarUrl ? (
              <Image src={stats.avatarUrl} alt="GitHub Avatar" width={48} height={48} className="w-full h-full object-cover" unoptimized />
            ) : (
              <div className="w-full h-full bg-dark-800 flex items-center justify-center">
                <FaGithub className="text-stone" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-display font-bold text-white flex items-center gap-2">
              <FaGithub /> GitHub Stats
            </h3>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline uppercase tracking-widest font-bold">
              @{username}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-dark-900 border border-stone/30 rounded p-2 text-center flex flex-col items-center justify-center group-hover:border-primary/30 transition-colors">
            <FaCode className="text-stone mb-1 group-hover:text-primary transition-colors" />
            <div className="text-white font-bold">{stats.publicRepos}</div>
            <div className="text-[9px] text-stone uppercase tracking-widest">Repos</div>
          </div>
          
          <div className="bg-dark-900 border border-stone/30 rounded p-2 text-center flex flex-col items-center justify-center group-hover:border-primary/30 transition-colors">
            <FaStar className="text-stone mb-1 group-hover:text-primary transition-colors" />
            <div className="text-white font-bold">{stats.totalStars}</div>
            <div className="text-[9px] text-stone uppercase tracking-widest">Stars</div>
          </div>
          
          <div className="bg-dark-900 border border-stone/30 rounded p-2 text-center flex flex-col items-center justify-center group-hover:border-primary/30 transition-colors">
            <FaCodeBranch className="text-stone mb-1 group-hover:text-primary transition-colors" />
            <div className="text-white font-bold">{stats.followers}</div>
            <div className="text-[9px] text-stone uppercase tracking-widest">Followers</div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
