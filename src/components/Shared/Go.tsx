import Link from "next/link";

type TGo = {
    to: string,
    label: string,
    prefetch?: boolean,
    as?: string
};

const Go = ({ to, label, ...rest }: TGo) => (
    <Link href={to} {...rest}>
        <a>{label}</a>
    </Link>
);

export default Go;