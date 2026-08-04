"use client";

import React from "react";

interface ToolLogoProps {
  name: string;
  className?: string;
}

export default function ToolLogo({ name, className = "w-6 h-6" }: ToolLogoProps) {
  const normName = name.toLowerCase().trim();

  switch (normName) {
    case "okta":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#007DC1" strokeWidth="3" />
          <circle cx="12" cy="12" r="4" fill="#007DC1" />
        </svg>
      );

    case "azure ad":
    case "azure":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13.05 2.25L3.75 14.25H9.75L6.75 21.75L20.25 9.75H14.25L17.25 2.25H13.05Z" fill="#0078D4" />
        </svg>
      );

    case "auth0":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.98 11.23L18.66 3H5.34L2.02 11.23C1.65 12.16 1.83 13.22 2.5 13.98L12 24.23L21.5 13.98C22.17 13.22 22.35 12.16 21.98 11.23ZM12 17.5L7.5 12.6L8.85 9.25H15.15L16.5 12.6L12 17.5Z" fill="#EB5424" />
        </svg>
      );

    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5C11.6 4.2 8.7 8.2 8.7 13C8.7 17.3 11 20.7 11.7 22.5H12.3C13 20.7 15.3 17.3 15.3 13C15.3 8.2 12.4 4.2 12 1.5Z" fill="#47A248" />
        </svg>
      );

    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM15 13H9V11H15V13ZM15 9H9V7H15V9Z" fill="#336791" />
        </svg>
      );

    case "snowflake":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="3.34" y1="7" x2="20.66" y2="17" />
          <line x1="3.34" y1="17" x2="20.66" y2="7" />
          <path d="M10 4L12 2L14 4" />
          <path d="M10 20L12 22L14 20" />
        </svg>
      );

    case "salesforce":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#00A1E0" />
        </svg>
      );

    case "hubspot":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.8 7.2V4.5C18.8 4.1 19.5 3.1 19.5 2C19.5 0.9 18.6 0 17.5 0C16.4 0 15.5 0.9 15.5 2C15.5 3.1 16.2 4.1 17.2 4.5V7.2L11 10.8V7.5C11.8 7.1 12.5 6.1 12.5 5C12.5 3.6 11.4 2.5 10 2.5C8.6 2.5 7.5 3.6 7.5 5C7.5 6.1 8.2 7.1 9 7.5V16.5C8.2 16.9 7.5 17.9 7.5 19C7.5 20.4 8.6 21.5 10 21.5C11.4 21.5 12.5 20.4 12.5 19C12.5 17.9 11.8 16.9 11 16.5V13.2L17.8 16.8V19.5C16.8 19.9 16.1 20.9 16.1 22C16.1 23.1 17 24 18.1 24C19.2 24 20.1 23.1 20.1 22C20.1 20.9 19.4 19.9 18.4 19.5V16.2C18.4 15.5 18 14.8 17.3 14.4L11.5 11.3L17.3 8.2C18 7.8 18.4 7.1 18.4 6.4V7.2H17.8Z" fill="#FF7A59" />
        </svg>
      );

    case "microsoft dynamics":
    case "dynamics":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3H12V11H4V3ZM14 3H20V11H14V3ZM4 13H12V21H4V13ZM14 13H20V21H14V13Z" fill="#0078D4" />
        </svg>
      );

    case "onetrust":
    case "trustarc":
    case "securiti":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 15.5L6 11.5L7.41 10.09L10 12.67L16.59 6.09L18 7.5L10 15.5Z" fill="#6366F1" />
        </svg>
      );

    case "dynatrace":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 19H22L12 2ZM12 6L18 16H6L12 6Z" fill="#14D9C4" />
        </svg>
      );

    case "splunk":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M6 4L18 12L6 20V4Z" fill="#FF007A" />
        </svg>
      );

    case "netraa":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="#8B5CF6" />
        </svg>
      );

    case "teams":
    case "microsoft teams":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M19 7H13V17H19V7Z" fill="#6264A7" />
          <path d="M11 5H3V19H11V5Z" fill="#4B53BC" />
        </svg>
      );

    case "slack":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M6 15A2 2 0 0 1 4 13A2 2 0 0 1 6 11A2 2 0 0 1 8 13V15H6ZM6 9.5A2 2 0 0 1 8 7.5A2 2 0 0 1 10 9.5V15A2 2 0 0 1 8 17A2 2 0 0 1 6 15V9.5ZM14.5 6A2 2 0 0 1 16.5 4A2 2 0 0 1 18.5 6A2 2 0 0 1 16.5 8H14.5V6ZM14.5 14.5A2 2 0 0 1 13 16.5A2 2 0 0 1 11 14.5V9A2 2 0 0 1 13 7A2 2 0 0 1 15 9V14.5H14.5Z" fill="#E01E5A" />
        </svg>
      );

    case "jira":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.57 11.43L1.14 1H0V23H23V0H11.57V11.43Z" fill="#0052CC" />
        </svg>
      );

    case "azure devops":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M22 6.5L14.5 2L4.5 6L2 14.5L9.5 22L20 18L22 6.5Z" fill="#0078D4" />
        </svg>
      );

    case "servicenow":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#81B441" strokeWidth="3" />
        </svg>
      );

    case "jenkins":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" fill="#D33833" />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "gitlab":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M22.65 14.39L12 22.13L1.35 14.39C0.8 13.99 0.57 13.28 0.77 12.63L3.84 3.19C4.04 2.57 4.7 2.22 5.3 2.42C5.9 2.62 6.27 3.27 6.13 3.9L4.03 10.37H19.97L17.87 3.9C17.73 3.27 18.1 2.62 18.7 2.42C19.3 2.22 19.96 2.57 20.16 3.19L23.23 12.63C23.43 13.28 23.2 13.99 22.65 14.39Z" fill="#FC6D26" />
        </svg>
      );

    case "stripe":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13.98 9.54C13.98 8.65 13.21 8.24 11.96 8.24C10.22 8.24 8.01 8.94 6.36 9.85V4.69C8.22 3.89 10.28 3.5 12.24 3.5C16.27 3.5 19.24 5.56 19.24 9.87C19.24 16.14 10.84 16.32 10.84 18.42C10.84 19.46 11.77 19.92 13.14 19.92C15.02 19.92 17.38 19.06 19.2 18.06V23.23C17.18 24.16 14.93 24.5 12.82 24.5C8.42 24.5 5.5 22.38 5.5 18.06C5.5 11.62 13.98 11.58 13.98 9.54Z" fill="#635BFF" />
        </svg>
      );

    case "adyen":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16H8V8H10V16ZM16 16H14V8H16V16Z" fill="#0ABF53" />
        </svg>
      );

    case "paypal":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.642h7.025c2.56 0 4.542.593 5.485 1.637 1.017 1.127 1.134 2.76.328 4.582-.99 2.234-2.923 3.65-5.327 3.65H9.682a.77.77 0 0 0-.76.643l-1.846 7.747z" fill="#003087" />
          <path d="M9.682 12.947h3.533c2.404 0 4.337-1.416 5.327-3.65.342-.773.473-1.57.42-2.348-.52 2.783-2.613 4.605-5.378 4.605H9.682a.77.77 0 0 0-.76.642l-1.846 7.747h4.606l1.077-4.52a.77.77 0 0 1 .76-.642z" fill="#0079C1" />
        </svg>
      );

    case "finacle":
    case "temenos":
    case "fis":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#0072C6" strokeWidth="2" />
          <path d="M8 12H16M12 8V16" stroke="#0072C6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "bigquery":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="#4285F4" />
        </svg>
      );

    case "databricks":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z" fill="#FF3621" />
        </svg>
      );

    case "datadog":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H9V14H11V16ZM15 16H13V14H15V16ZM15 12H9V8H15V12Z" fill="#632CA6" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" fill="#8B5CF6" />
        </svg>
      );
  }
}
