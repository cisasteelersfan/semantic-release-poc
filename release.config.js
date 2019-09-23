parserOpts = {
  mergePattern: /^Merge pull request #(\d+) from (.*)$/,
  mergeCorrespondence: ["id", "source"]
};

module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        parserOpts
      }
    ],
    "@semantic-release/github"
  ]
};
