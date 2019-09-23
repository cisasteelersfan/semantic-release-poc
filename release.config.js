module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          mergePattern: /^Merge pull request #(\d+) from (.*)$/,
          mergeCorrespondence: ["id", "source"]
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
