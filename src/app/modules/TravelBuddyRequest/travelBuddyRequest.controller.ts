import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TravelBuddyRequestServices } from "./travelBuddyRequest.service";
import sendResponse from "../../../shared/sendResponse";

const sendTravelBuddyRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await TravelBuddyRequestServices.sendTravelBuddyRequest(
      req.body
    );
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Travel buddy request sent successfully",
      data: result,
    });
  }
);

const getPotentialTravelBuddies = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const tripId = req.params.tripId;

    const result = await TravelBuddyRequestServices.getPotentialTravelBuddies(
      tripId
    );
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Potential travel buddies retrieved successfully",
      data: result,
    });
  }
);

const respondTravelBuddyRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const buddyId = req.params.buddyId;

    const result = await TravelBuddyRequestServices.respondTravelBuddyRequest(
      buddyId,
      req.body
    );
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Travel buddy request responded successfully",
      data: result,
    });
  }
);

export const TravelBuddyRequestControllers = {
  sendTravelBuddyRequest,
  getPotentialTravelBuddies,
  respondTravelBuddyRequest,
};
