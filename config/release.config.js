module.exports = {
  preset: 'angular',
  analyzeCommits: {
    parserOpts: {
      // Optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: ['emoji', 'tag', 'message']
    }
  },
  generateNotes: {
    parserOpts: {
      // Optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: ['emoji', 'tag', 'message']
    }
  }
}
