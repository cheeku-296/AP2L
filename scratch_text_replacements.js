const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

// 1. ITChallenges.tsx
replaceInFile('src/components/solutions/IT-Support/ITChallenges.tsx', [
  {
    from: 'Modern IT Support Needs Intelligent Service Management',
    to: 'Intelligent IT Service Management'
  }
]);

// 2. ITWorkflow.tsx
replaceInFile('src/components/solutions/IT-Support/ITWorkflow.tsx', [
  {
    from: 'title="Intelligent Service Delivery Across Every Stage"',
    to: 'title="Intelligent Service Delivery"'
  }
]);

// 3. Cliqtest Integrations
replaceInFile('src/components/products-hero/Cliqtest/Integrations/Integrations.tsx', [
  {
    from: 'Seamlessly connect cliQTest with your existing toolchain.',
    to: 'Seamlessly connect cliQTest with your existing toolchain to unify testing workflows, eliminate manual bottlenecks, and accelerate your entire software delivery lifecycle.'
  }
]);

// 4. Finxplore KeyCapabilities
replaceInFile('src/components/products-hero/Finxplore/KeyCapabilities/KeyCapabilities.tsx', [
  {
    from: 'Enterprise-grade capabilities to detect, investigate, and prevent fraud at scale.',
    to: 'Enterprise-grade capabilities to detect, investigate, and prevent fraud at scale, ensuring your financial ecosystems remain secure and compliant against emerging threats in real-time.'
  }
]);

// 5. Finxplore Integrations
replaceInFile('src/components/products-hero/Finxplore/Integrations/Integrations.tsx', [
  {
    from: '<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Ecosystem Integration</span>',
    to: 'Ecosystem Integration'
  },
  {
    from: 'Connect Finxplore with your existing financial infrastructure in minutes.',
    to: 'Connect Finxplore with your existing financial infrastructure in minutes to unify data streams and accelerate reconciliation.'
  }
]);
