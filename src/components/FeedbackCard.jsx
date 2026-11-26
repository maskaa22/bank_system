import { quotes } from "../assets";

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col px-9 py-10 rounded-[24px] max-w-[370px] md:mr-8 sm:mr-5 mr-0 my-4 glow-card'>
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-body font-normal text-[17px] leading-[1.8] text-white/90 my-8">{content}</p>
      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full ring-2 ring-violet/60 ring-offset-2 ring-offset-primary"/>
        <div className="flex flex-col ml-4">
          <h4 className="font-display font-semibold text-[17px] leading-[1.4] text-white">{name}</h4>
          <p className="font-body font-normal text-[14px] leading-[1.5] text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
)

export default FeedbackCard
