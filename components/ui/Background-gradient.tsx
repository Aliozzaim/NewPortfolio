import { cn } from "@/utils/cn"
import React from "react"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion"
import { Tilt } from "react-tilt"

export const BackgroundGradient = ({
  children,
  className,
  index,
  type,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  index: number
  type: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }

  return type !== "tilt" ? (
    <Tilt className="xs:w-[250px] ">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <div className={cn("relative p-[4px] group", containerClassName)}>
          <motion.div
            variants={animate ? variants : undefined}
            initial={animate ? "initial" : undefined}
            animate={animate ? "animate" : undefined}
            transition={
              animate
                ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                : undefined
            }
            style={{
              backgroundSize: animate ? "400% 400%" : undefined,
            }}
            className={cn(
              "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
              " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            )}
          />
          <motion.div
            variants={animate ? variants : undefined}
            initial={animate ? "initial" : undefined}
            animate={animate ? "animate" : undefined}
            transition={
              animate
                ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                : undefined
            }
            style={{
              backgroundSize: animate ? "400% 400%" : undefined,
            }}
            className={cn(
              "absolute inset-0 rounded-3xl z-[1]",
              "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            )}
          />

          <div className={cn("relative z-10", className)}>{children}</div>
        </div>
      </motion.div>
    </Tilt>
  ) : (
    <motion.div variants={fadeIn("right", "spring", 1 * 1)}>
      <div className={cn("relative p-[4px] group", containerClassName)}>
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
          transition={
            animate
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              : undefined
          }
          style={{
            backgroundSize: animate ? "400% 400%" : undefined,
          }}
          className={cn(
            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
            " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          )}
        />
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
          transition={
            animate
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              : undefined
          }
          style={{
            backgroundSize: animate ? "400% 400%" : undefined,
          }}
          className={cn(
            "absolute inset-0 rounded-3xl z-[1]",
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          )}
        />

        <div className={cn("relative z-10", className)}>{children}</div>
      </div>
    </motion.div>
  )
}
