export const paginationProps = {
    defaultPageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `${total} resultados`,
    hideOnSinglePage: true,
    defaultCurrent: 1,
};