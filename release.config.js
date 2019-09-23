module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          mergePattern: /^Merge pull request #(\d+) from (.*)$/,
          mergeCorrespondence: ["id", "source"]
          // headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
          //   headerPattern: /\\n\\n(\w*)(?:\((.*)\))?: (.*)$/,
          //   headerCorrespondence: [`type`, `scope`, `subject`]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        parserOpts: {
          mergePattern: /^Merge pull request #(\d+) from (.*)$/,
          mergeCorrespondence: ["id", "source"]
        }
      }
    ],
    "@semantic-release/github"
  ]
};
