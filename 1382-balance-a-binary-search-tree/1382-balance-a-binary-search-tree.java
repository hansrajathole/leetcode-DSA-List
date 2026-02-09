class Solution {

    List<Integer> list = new ArrayList<>();

    public TreeNode balanceBST(TreeNode root) {
        // Step 1: inorder traversal
        inorder(root);

        // Step 2: build balanced BST
        return buildBST(0, list.size() - 1);
    }

    // inorder traversal to get sorted values
    private void inorder(TreeNode root) {
        if (root == null) return;

        inorder(root.left);
        list.add(root.val);
        inorder(root.right);
    }

    // build balanced BST from sorted list
    private TreeNode buildBST(int start, int end) {
        if (start > end) return null;

        int mid = (start + end) / 2;
        TreeNode root = new TreeNode(list.get(mid));

        root.left = buildBST(start, mid - 1);
        root.right = buildBST(mid + 1, end);

        return root;
    }
}
