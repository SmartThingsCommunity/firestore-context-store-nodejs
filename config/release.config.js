module.exports = {
  analyzeCommits: {
    preset: 'angular',
    parserOpts: {
      // Optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: ['emoji', 'tag', 'message']
    }
  },
  generateNotes: {
    preset: 'angular',
    parserOpts: {
      // Optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: ['emoji', 'tag', 'message']
    }
  }
}
