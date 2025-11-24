import { GoBackButton } from "./go-back"
export const SectionTitle = ({sectionTitle}: {sectionTitle: string}) => {
    return   <div className="flex my-3 items-center flex-row gap-1">
                <GoBackButton />
                <h1 className="scroll-m-20  mb-1 text-2xl  tracking-tight text-balance">
                    {sectionTitle}
                </h1>
            </div>
}